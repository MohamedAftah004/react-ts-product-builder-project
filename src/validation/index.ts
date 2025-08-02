/**
 * Validates product input fields based on defined business rules.
 *
 * This function checks the following fields of a product:
 * - `title`: Required, must be between 10 and 80 characters.
 * - `description`: Required, must be between 50 and 500 characters.
 * - `imageURL`: Required, must be a valid image URL ending with a known image extension.
 * - `price`: Required, must be a numeric string.
 *
 * @param product - An object containing product fields to validate.
 * @returns An object containing validation errors for each field. Empty strings indicate no error.
 *
 * @example
 * const errors = productValidation({
 *   title: "New Product",
 *   description: "This is a sample product description.",
 *   imageURL: "https://example.com/image.jpg",
 *   price: "29.99"
 * });
 *
 * if (errors.title) {
 *   console.log(errors.title); // Logs title-related validation error, if any.
 * }
 */
export const productValidation = (product: {
  title: string;
  description: string;
  imageURL: string;
  price: string;
}) => {
  type ErrorsType = {
    title: string;
    description: string;
    imageURL: string;
    price: string;
  };

  const errors: ErrorsType = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
  };

  const validateUrl = /\.(jpeg|jpg|gif|png|webp|avif|tiff|bmp)$/i;

  // title validation
  if (
    !product.title.trim() ||
    product.title.length < 10 ||
    product.title.length > 80
  ) {
    errors.title = "Product title must be between 10 and 80 characters!";
  }

  // description validation
  if (
    !product.description.trim() ||
    product.description.length < 50 ||
    product.description.length > 500
  ) {
    errors.description =
      "Description title must be between 50 and 500 characters!";
  }

  if (!product.imageURL.trim() || !validateUrl.test(product.imageURL)) {
    errors.imageURL = "Valid image URL is required!";
  }

  if (!product.price.trim() || isNaN(Number(product.price))) {
    errors.price = "Valid price is required!";
  }

  return errors;
};
