import { STATE } from '../../../utils/pattern';
export declare const selectStoryBaseArgTypes: {
    readonly label: {
        readonly control: "text";
        readonly description: "Label do campo (obrigatório).";
    };
    readonly value: {
        readonly control: "text";
        readonly description: "Valor exibido (controlado).";
    };
    readonly defaultValue: {
        readonly control: "text";
        readonly description: "Valor inicial não controlado.";
    };
    readonly placeholder: {
        readonly control: "text";
        readonly description: "Placeholder quando vazio.";
    };
    readonly state: {
        readonly control: "radio";
        readonly description: "Estado visual: enabled, disabled, readonly, error, loading, skeleton, success.";
        readonly options: STATE[];
    };
    readonly disabled: {
        readonly control: "boolean";
        readonly description: "Desabilita interação e picker.";
    };
    readonly readOnly: {
        readonly control: "boolean";
        readonly description: "Somente leitura; não abre picker.";
    };
    readonly required: {
        readonly control: "boolean";
        readonly description: "Atributo required no input interno.";
    };
    readonly showHint: {
        readonly control: "boolean";
        readonly description: "Exibe área de hints.";
    };
    readonly hints: {
        readonly control: "object";
        readonly description: "Hint(s) abaixo do campo — string ou array (até 3).";
    };
    readonly error: {
        readonly control: "object";
        readonly description: "Mensagens de erro (até 3); use com state error.";
    };
    readonly success: {
        readonly control: "text";
        readonly description: "Mensagem de sucesso; use com state success.";
    };
    readonly showHelper: {
        readonly control: "boolean";
        readonly description: "Ícone de ajuda no trailing.";
    };
    readonly onHelper: {
        readonly action: "onHelper";
        readonly description: "Clique no helper (InputBase).";
    };
    readonly onClickHelper: {
        readonly action: "onClickHelper";
        readonly description: "Clique no helper (Select, stopPropagation).";
    };
    readonly showFlag: {
        readonly control: "boolean";
        readonly description: "Exibe bandeira no leading.";
    };
    readonly showContent: {
        readonly control: "boolean";
        readonly description: "false oculta label/placeholder/value (ex.: InputCountry).";
    };
    readonly prefix: {
        readonly control: "text";
        readonly description: "Prefixo no campo.";
    };
    readonly showClear: {
        readonly control: "boolean";
        readonly description: "Botão limpar (herança InputBase).";
    };
    readonly showForceBar: {
        readonly control: "boolean";
        readonly description: "Barra de força (herança InputBase).";
    };
    readonly onChange: {
        readonly action: "onChange";
        readonly description: "Valor da opção (`option.value`) no painel desktop.";
    };
    readonly onTag: {
        readonly action: "onTag";
        readonly description: "Callback de tagging Toranja.";
    };
    readonly id: {
        readonly control: "text";
        readonly description: "Id estável do trigger (a11y).";
    };
    readonly options: {
        readonly control: "object";
        readonly description: "Lista SelectOption[] — painel desktop. Cada item aceita leadingProps e trailingProps do ListItemGeneral.";
    };
    readonly onOptionSelect: {
        readonly action: "onOptionSelect";
        readonly description: "Opção escolhida no painel desktop.";
    };
    readonly onClick: {
        readonly action: "onClick";
        readonly description: "Clique no campo — picker webview ou fallback desktop sem options.";
    };
};
export declare const selectDesktopOnlyArgTypes: {
    readonly hideLabelWhenFilled: {
        readonly control: "boolean";
        readonly description: "**Somente desktop (IB):** com `options` e surface `desktop`. Quando `true` e há valor selecionado, oculta o label visual e usa layout compacto do trigger; `label` segue acessível via `aria-label`. Default `false`. Sem efeito em webview.";
        readonly table: {
            readonly category: "Desktop";
        };
    };
};
