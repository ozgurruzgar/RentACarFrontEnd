import { Brand } from "./brands";
import { ResponseModel } from "./responseModel";

export interface BrandResponseModul extends ResponseModel{
    data:Brand[];
};