import { CSSProperties } from 'react';
import { Color, ColorResult } from 'react-color';
interface HSVColor {
    a?: number | undefined;
    h: number;
    s: number;
    v: number;
}
export type ColorPickerTypes = 'BlockPicker' | 'ChromePicker' | 'CirclePicker' | 'CompactPicker' | 'GithubPicker' | 'HuePicker' | 'MaterialPicker' | 'PhotoshopPicker' | 'SketchPicker' | 'SliderPicker' | 'SwatchesPicker' | 'TwitterPicker';
export type ColorPickerValue = Color | HSVColor;
export type ColorPickerResult = ColorResult;
export type AnyColorFormat = ColorPickerResult | ColorPickerValue;
type Props = {
    popup?: boolean;
    value?: AnyColorFormat;
    onChange?: (value: any) => void;
    onChangeComplete?: (value: any) => void;
    onColorResult?: (color: ColorPickerResult) => AnyColorFormat;
    blockStyles?: CSSProperties;
    picker?: ColorPickerTypes;
    popoverProps?: any;
    [key: string]: any;
};
type FC<P> = ((props: P) => JSX.Element) & {
    propTypes: {
        [key: string]: any;
    };
};
declare const Colorpicker: FC<Props>;
export default Colorpicker;
