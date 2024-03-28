export type ButtomProps = Partial<{
    size: ButtomSizes,
    height: string,
    background: string,
    width: string
}>

export enum ButtomSizes {
    SMALL = 'small',
    MEDIUM = 'medium',
    INTERMEDIATE = 'intermediate',
    LARGE = 'large',
    XL = 'extraLarge',
    FIT = 'fit'
}