// Hack para lib react-lottie-player
import Lottie from "react-lottie-player";
// react-lottie-player doesn't export LottieProps
// https://stackoverflow.com/a/50924506/3793499
type TypeWithGeneric<T> = React.FC<T>;
type extractGeneric<Type> = Type extends TypeWithGeneric<infer X> ? X : any;
type LottiePropsIncludingNativeHTMLProps = extractGeneric<typeof Lottie>;
type LottieProps = Omit<
    LottiePropsIncludingNativeHTMLProps,
    | keyof React.ClassAttributes<HTMLDivElement>
    | keyof React.HTMLAttributes<HTMLDivElement>
>;
export interface IAnimationProps extends LottieProps {
    play?: boolean;
}

export type SearchType = "characters" | "comics" | "";

export interface IPaginationProps {
    totalPages: number;
    currentPage: number;
    setCurrentPage: (currentPage: number) => void;
}

export interface IResponse {
    code: number;
    status: string;
    data: IData;
}

export interface IImage {
    // The directory path of to the image.,
    path: string;
    // The file extension for the image.
    extension: string;
}

export interface IData {
    limit: number;
    total: number;
    count: number;
    results: [IEntity];
}

export interface IReturnedProps {
    entities: IEntity[];
    getEntities: (page: number) => void;
    totalPages: number;
    totalEntities: number;
    setEntities: (entities: IEntity[]) => void;
    orderBy: string;
    setOrderBy: (order: string) => void;
}

export interface IEntity {
    // The unique ID of the character resource
    id?: number;
    // The title of the comic
    title?: string;
    // The name of the character
    name?: string;
    // A short bio or description of the character
    description: string;
    // The date the resource was most recently modified
    modified?: Date;
    // The representative image for this character
    thumbnail?: IImage;
}
