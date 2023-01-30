/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Products } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ProductsUpdateFormInputValues = {
    Product_name?: string;
    price?: number;
    Details?: string;
    img_url?: string;
};
export declare type ProductsUpdateFormValidationValues = {
    Product_name?: ValidationFunction<string>;
    price?: ValidationFunction<number>;
    Details?: ValidationFunction<string>;
    img_url?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProductsUpdateFormOverridesProps = {
    ProductsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Product_name?: PrimitiveOverrideProps<TextFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
    Details?: PrimitiveOverrideProps<TextFieldProps>;
    img_url?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProductsUpdateFormProps = React.PropsWithChildren<{
    overrides?: ProductsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    products?: Products;
    onSubmit?: (fields: ProductsUpdateFormInputValues) => ProductsUpdateFormInputValues;
    onSuccess?: (fields: ProductsUpdateFormInputValues) => void;
    onError?: (fields: ProductsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProductsUpdateFormInputValues) => ProductsUpdateFormInputValues;
    onValidate?: ProductsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ProductsUpdateForm(props: ProductsUpdateFormProps): React.ReactElement;
