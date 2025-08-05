export const productValidation = (product: {
  title: string;
  description: string;
  imageURL: string;
  price: string;
  colors?: string[];
}) => {
  type ErrorsType = {
    title: string;
    description: string;
    imageURL: string;
    price: string;
    colors?: string;
  };

  const errors: ErrorsType = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: "",
  };

  const validateUrl = /\.(jpeg|jpg|gif|png|webp|avif|tiff|bmp)$/i;

  // title validation
  if (
    !product.title.trim() ||
    product.title.length < 5 ||
    product.title.length > 50
  ) {
    errors.title = "Product title must be between 5 and 50 characters!";
  }

  // description validation
  if (
    !product.description.trim() ||
    product.description.length < 10 ||
    product.description.length > 500
  ) {
    errors.description =
      "Description title must be between 10 and 500 characters!";
  }

  // Image
  if (!product.imageURL.trim() || !validateUrl.test(product.imageURL)) {
    errors.imageURL = "Valid image URL is required!";
  }

  if (!product.price.trim() || isNaN(Number(product.price))) {
    errors.price = "Valid price is required!";
  }

  // Color
  if (!product.colors || product.colors.length === 0)
    errors.colors = "Please select at least one color!";
  return errors;
};
