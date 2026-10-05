/**
 * Icon color tokens organized by semantic categories
 */
export declare const IconColors: {
    readonly Disabled: "Icon/Disabled";
    readonly Neutral: {
        readonly Primary: "Icon/Neutral/Primary";
        readonly Secondary: "Icon/Neutral/Secondary";
        readonly Inverse: "Icon/Neutral/Inverse";
    };
    readonly Static: {
        readonly Black: "Icon/Static/Black";
        readonly Orange: "Icon/Static/Orange";
        readonly White: {
            readonly Default: "Icon/Static/White/Default";
            readonly Soft: "Icon/Static/White/Soft";
        };
    };
    readonly Brand: {
        readonly Default: "Icon/Brand/Default";
        readonly Strong: "Icon/Brand/Strong";
        readonly Stronger: "Icon/Brand/Stronger";
    };
    readonly Feedback: {
        readonly Success: {
            readonly Default: "Icon/Feedback/Success/Default";
        };
        readonly Error: {
            readonly Default: "Icon/Feedback/Error/Default";
        };
        readonly Warning: {
            readonly Default: "Icon/Feedback/Warning/Default";
            readonly Strong: "Icon/Feedback/Warning/Strong";
        };
        readonly Information: {
            readonly Default: "Icon/Feedback/Information/Default";
        };
    };
    readonly Accent: {
        readonly Red: {
            readonly Default: "Icon/Accent/Red/Default";
            readonly Strong: "Icon/Accent/Red/Strong";
        };
        readonly Brown: {
            readonly Default: "Icon/Accent/Brown/Default";
            readonly Strong: "Icon/Accent/Brown/Strong";
        };
        readonly Orange: {
            readonly Default: "Icon/Accent/Orange/Default";
            readonly Strong: "Icon/Accent/Orange/Strong";
        };
        readonly Gold: {
            readonly Default: "Icon/Accent/Gold/Default";
            readonly Strong: "Icon/Accent/Gold/Strong";
        };
        readonly Yellow: {
            readonly Default: "Icon/Accent/Yellow/Default";
            readonly Strong: "Icon/Accent/Yellow/Strong";
        };
        readonly Green: {
            readonly Default: "Icon/Accent/Green/Default";
            readonly Strong: "Icon/Accent/Green/Strong";
        };
        readonly Mint: {
            readonly Default: "Icon/Accent/Mint/Default";
            readonly Strong: "Icon/Accent/Mint/Strong";
        };
        readonly Cyan: {
            readonly Default: "Icon/Accent/Cyan/Default";
            readonly Strong: "Icon/Accent/Cyan/Strong";
        };
        readonly Blue: {
            readonly Default: "Icon/Accent/Blue/Default";
            readonly Strong: "Icon/Accent/Blue/Strong";
        };
        readonly Purple: {
            readonly Default: "Icon/Accent/Purple/Default";
            readonly Strong: "Icon/Accent/Purple/Strong";
        };
        readonly Pink: {
            readonly Default: "Icon/Accent/Pink/Default";
            readonly Strong: "Icon/Accent/Pink/Strong";
        };
    };
};
/**
 * All possible icon color tokens
 */
export type IconColorToken = 'Icon/Disabled' | 'Icon/Neutral/Primary' | 'Icon/Neutral/Secondary' | 'Icon/Neutral/Inverse' | 'Icon/Static/Black' | 'Icon/Static/Orange' | 'Icon/Static/White/Default' | 'Icon/Static/White/Soft' | 'Icon/Brand/Default' | 'Icon/Brand/Strong' | 'Icon/Brand/Stronger' | 'Icon/Feedback/Success/Default' | 'Icon/Feedback/Error/Default' | 'Icon/Feedback/Warning/Default' | 'Icon/Feedback/Warning/Strong' | 'Icon/Feedback/Information/Default' | 'Icon/Accent/Red/Default' | 'Icon/Accent/Red/Strong' | 'Icon/Accent/Brown/Default' | 'Icon/Accent/Brown/Strong' | 'Icon/Accent/Orange/Default' | 'Icon/Accent/Orange/Strong' | 'Icon/Accent/Gold/Default' | 'Icon/Accent/Gold/Strong' | 'Icon/Accent/Yellow/Default' | 'Icon/Accent/Yellow/Strong' | 'Icon/Accent/Green/Default' | 'Icon/Accent/Green/Strong' | 'Icon/Accent/Mint/Default' | 'Icon/Accent/Mint/Strong' | 'Icon/Accent/Cyan/Default' | 'Icon/Accent/Cyan/Strong' | 'Icon/Accent/Blue/Default' | 'Icon/Accent/Blue/Strong' | 'Icon/Accent/Purple/Default' | 'Icon/Accent/Purple/Strong' | 'Icon/Accent/Pink/Default' | 'Icon/Accent/Pink/Strong';
/**
 * IconColors object type
 */
export type IconColorsType = typeof IconColors;
