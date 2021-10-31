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
