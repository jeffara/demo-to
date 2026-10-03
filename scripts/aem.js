/*
 * Copyright 2026 Adobe. All rights reserved.
 * AEM Edge Delivery Services Core Helpers (XWalk Boilerplate)
 */

/**
 * Log a message to console
 */
export function sampleRUM(checkpoint, data = {}) {
  sampleRUM.defer = sampleRUM.defer || [];
  const defer = (fnname) => {
    sampleRUM[fnname] = sampleRUM[fnname]
      || ((...args) => sampleRUM.defer.push({ fnname, args }));
  };
  sampleRUM.drain = sampleRUM.drain
    || ((dfnname, fn) => {
      sampleRUM[dfnname] = fn;
      sampleRUM.defer
        .filter(({ fnname }) => dfnname === fnname)
        .forEach(({ args }) => sampleRUM[dfnname](...args));
    });
  sampleRUM.always = sampleRUM.always || [];
  sampleRUM.always.on = (chpoint, fn) => {
    sampleRUM.always[chpoint] = fn;
  };
  sampleRUM.on = (chpoint, fn) => {
    sampleRUM.always[chpoint] = fn;
  };
  defer('observe');
  defer('cwv');
}

/**
 * Extracts metadata from the document head.
 */
export function getMetadata(name, doc = document) {
  const attr = name && name.includes(':') ? 'property' : 'name';
  const meta = doc.head.querySelector(`meta[${attr}="${name}"]`);
  return meta && meta.content;
}

/**
 * Reads block config from a block element.
 */
export function readBlockConfig(block) {
  const config = {};
  block.querySelectorAll(':scope > div').forEach((row) => {
    if (row.children) {
      const cols = [...row.children];
      if (cols[1]) {
        const col = cols[1];
        const name = toClassName(cols[0].textContent);
        let value = '';
        if (col.querySelector('a')) {
          const as = [...col.querySelectorAll('a')];
          if (as.length === 1) {
            value = as[0].href;
          } else {
            value = as.map((a) => a.href);
          }
        } else if (col.querySelector('img')) {
          const imgs = [...col.querySelectorAll('img')];
          if (imgs.length === 1) {
            value = imgs[0].src;
          } else {
            value = imgs.map((img) => img.src);
          }
        } else if (col.querySelector('p')) {
          const ps = [...col.querySelectorAll('p')];
          if (ps.length === 1) {
            value = ps[0].textContent;
          } else {
            value = ps.map((p) => p.textContent);
          }
        } else {
          value = row.children[1].textContent;
        }
        config[name] = value;
      }
    }
  });
  return config;
}

/**
 * Sanitizes a string for use as a class name.
 */
export function toClassName(name) {
  return typeof name === 'string'
    ? name
      .toLowerCase()
      .replace(/[^0-9a-z]/gi, '-')
      .replace(/^-+|-+$/g, '')
    : '';
}

/**
 * Creates an optimized picture element.
 */
export function createOptimizedPicture(src, alt = '', eager = false, breakpoints = [{ media: '(min-width: 600px)', width: '2000' }, { width: '750' }]) {
  const url = new URL(src, window.location.href);
  const picture = document.createElement('picture');
  const { pathname } = url;
  const ext = pathname.substring(pathname.lastIndexOf('.') + 1);

  breakpoints.forEach((br) => {
    const source = document.createElement('source');
    if (br.media) source.setAttribute('media', br.media);
    source.setAttribute('type', 'image/webp');
    source.setAttribute('srcset', `${pathname}?width=${br.width}&format=webply&optimize=medium`);
    picture.appendChild(source);
  });

  const img = document.createElement('img');
  img.setAttribute('loading', eager ? 'eager' : 'lazy');
  img.setAttribute('alt', alt);
  picture.appendChild(img);
  img.setAttribute('src', `${pathname}?width=${breakpoints[breakpoints.length - 1].width}&format=${ext}&optimize=medium`);
  return picture;
}

/**
 * Decorates buttons within a container.
 */
export function decorateButtons(element) {
  element.querySelectorAll('a').forEach((a) => {
    a.title = a.title || a.textContent;
    if (a.href !== a.textContent) {
      const up = a.parentElement;
      const twoup = a.parentElement.parentElement;
      if (!a.querySelector('img')) {
        if (up.childNodes.length === 1 && (up.tagName === 'P' || up.tagName === 'DIV')) {
          a.className = 'button';
          up.classList.add('button-container');
        }
        if (
          up.childNodes.length === 1
          && up.tagName === 'STRONG'
          && twoup.childNodes.length === 1
          && (twoup.tagName === 'P' || twoup.tagName === 'DIV')
        ) {
          a.className = 'button primary';
          twoup.classList.add('button-container');
        }
        if (
          up.childNodes.length === 1
          && up.tagName === 'EM'
          && twoup.childNodes.length === 1
          && (twoup.tagName === 'P' || twoup.tagName === 'DIV')
        ) {
          a.className = 'button secondary';
          twoup.classList.add('button-container');
        }
      }
    }
  });
}

/**
 * Decorates icons (e.g. :check:, :arrow-right:).
 */
export function decorateIcons(element) {
  element.querySelectorAll('span.icon').forEach((span) => {
    const iconName = Array.from(span.classList)
      .find((c) => c.startsWith('icon-'))
      ?.substring(5);
    if (iconName) {
      const img = document.createElement('img');
      img.dataset.iconName = iconName;
      img.src = `/icons/${iconName}.svg`;
      img.alt = iconName;
      img.loading = 'lazy';
      img.width = 20;
      img.height = 20;
      span.append(img);
    }
  });
}

/**
 * Decorates all sections in a container.
 */
export function decorateSections(main) {
  main.querySelectorAll(':scope > div').forEach((section) => {
    const wrappers = [];
    let defaultContent = false;
    [...section.children].forEach((e) => {
      if (e.tagName === 'DIV' || !defaultContent) {
        const wrapper = document.createElement('div');
        wrappers.push(wrapper);
        defaultContent = e.tagName !== 'DIV';
        if (defaultContent) wrapper.classList.add('default-content-wrapper');
      }
      wrappers[wrappers.length - 1].append(e);
    });
    wrappers.forEach((wrapper) => section.append(wrapper));
    section.classList.add('section');
  });
}

/**
 * Decorates all blocks in a container.
 */
export function decorateBlocks(main) {
  main.querySelectorAll('div.section > div > div').forEach((block) => {
    if (block.classList.length > 0) {
      block.classList.add('block');
      block.dataset.blockName = block.classList[0];
      block.dataset.blockStatus = 'initialized';
      const blockWrapper = block.parentElement;
      blockWrapper.classList.add(`${block.dataset.blockName}-wrapper`);
      const section = block.closest('.section');
      if (section) section.classList.add(`${block.dataset.blockName}-container`);
    }
  });
}

/**
 * Loads a block and calls its decorate function.
 */
export async function loadBlock(block) {
  const status = block.dataset.blockStatus;
  if (status !== 'loading' && status !== 'loaded') {
    block.dataset.blockStatus = 'loading';
    const { blockName } = block.dataset;
    try {
      const cssLoaded = new Promise((resolve) => {
        loadCSS(`/blocks/${blockName}/${blockName}.css`, resolve);
      });
      const decorationLoaded = new Promise((resolve) => {
        (async () => {
          try {
            const mod = await import(`/blocks/${blockName}/${blockName}.js`);
            if (mod.default) {
              await mod.default(block);
            }
          } catch (error) {
            // eslint-disable-next-line no-console
            console.error(`Failed to load module for ${blockName}`, error);
          }
          resolve();
        })();
      });
      await Promise.all([cssLoaded, decorationLoaded]);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(`Failed to load block ${blockName}`, error);
    }
    block.dataset.blockStatus = 'loaded';
  }
  return block;
}

/**
 * Loads all blocks in a container.
 */
export async function loadBlocks(main) {
  const blocks = [...main.querySelectorAll('div.block')];
  for (let i = 0; i < blocks.length; i += 1) {
    // eslint-disable-next-line no-await-in-loop
    await loadBlock(blocks[i]);
  }
}

/**
 * Loads a CSS file asynchronously.
 */
export function loadCSS(href, callback) {
  if (!document.querySelector(`head > link[href="${href}"]`)) {
    const link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', href);
    if (typeof callback === 'function') {
      link.onload = (e) => callback(e.type);
      link.onerror = (e) => callback(e.type);
    }
    document.head.append(link);
  } else if (typeof callback === 'function') {
    callback('noop');
  }
}

/**
 * Loads a script file asynchronously.
 */
export function loadScript(url, attrs = {}) {
  return new Promise((resolve, reject) => {
    if (!document.querySelector(`head > script[src="${url}"]`)) {
      const script = document.createElement('script');
      script.src = url;
      if (attrs) {
        // eslint-disable-next-line no-restricted-syntax, guard-for-in
        for (const attr in attrs) {
          script.setAttribute(attr, attrs[attr]);
        }
      }
      script.onload = resolve;
      script.onerror = reject;
      document.head.append(script);
    } else {
      resolve();
    }
  });
}
