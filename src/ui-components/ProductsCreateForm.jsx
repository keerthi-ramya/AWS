/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Products } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function ProductsCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    Product_name: "",
    price: "",
    Details: "",
    img_url: "",
  };
  const [Product_name, setProduct_name] = React.useState(
    initialValues.Product_name
  );
  const [price, setPrice] = React.useState(initialValues.price);
  const [Details, setDetails] = React.useState(initialValues.Details);
  const [img_url, setImg_url] = React.useState(initialValues.img_url);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setProduct_name(initialValues.Product_name);
    setPrice(initialValues.price);
    setDetails(initialValues.Details);
    setImg_url(initialValues.img_url);
    setErrors({});
  };
  const validations = {
    Product_name: [],
    price: [],
    Details: [],
    img_url: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value = getDisplayValue
      ? getDisplayValue(currentValue)
      : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          Product_name,
          price,
          Details,
          img_url,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new Products(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "ProductsCreateForm")}
      {...rest}
    >
      <TextField
        label="Product name"
        isRequired={false}
        isReadOnly={false}
        value={Product_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Product_name: value,
              price,
              Details,
              img_url,
            };
            const result = onChange(modelFields);
            value = result?.Product_name ?? value;
          }
          if (errors.Product_name?.hasError) {
            runValidationTasks("Product_name", value);
          }
          setProduct_name(value);
        }}
        onBlur={() => runValidationTasks("Product_name", Product_name)}
        errorMessage={errors.Product_name?.errorMessage}
        hasError={errors.Product_name?.hasError}
        {...getOverrideProps(overrides, "Product_name")}
      ></TextField>
      <TextField
        label="Price"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={price}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              Product_name,
              price: value,
              Details,
              img_url,
            };
            const result = onChange(modelFields);
            value = result?.price ?? value;
          }
          if (errors.price?.hasError) {
            runValidationTasks("price", value);
          }
          setPrice(value);
        }}
        onBlur={() => runValidationTasks("price", price)}
        errorMessage={errors.price?.errorMessage}
        hasError={errors.price?.hasError}
        {...getOverrideProps(overrides, "price")}
      ></TextField>
      <TextField
        label="Details"
        isRequired={false}
        isReadOnly={false}
        value={Details}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Product_name,
              price,
              Details: value,
              img_url,
            };
            const result = onChange(modelFields);
            value = result?.Details ?? value;
          }
          if (errors.Details?.hasError) {
            runValidationTasks("Details", value);
          }
          setDetails(value);
        }}
        onBlur={() => runValidationTasks("Details", Details)}
        errorMessage={errors.Details?.errorMessage}
        hasError={errors.Details?.hasError}
        {...getOverrideProps(overrides, "Details")}
      ></TextField>
      <TextField
        label="Img url"
        isRequired={false}
        isReadOnly={false}
        value={img_url}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Product_name,
              price,
              Details,
              img_url: value,
            };
            const result = onChange(modelFields);
            value = result?.img_url ?? value;
          }
          if (errors.img_url?.hasError) {
            runValidationTasks("img_url", value);
          }
          setImg_url(value);
        }}
        onBlur={() => runValidationTasks("img_url", img_url)}
        errorMessage={errors.img_url?.errorMessage}
        hasError={errors.img_url?.hasError}
        {...getOverrideProps(overrides, "img_url")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
