export interface ISubCategory {
    name: string;
}

export interface ICategory {
    name: string;
    subcategory?: string[];
}