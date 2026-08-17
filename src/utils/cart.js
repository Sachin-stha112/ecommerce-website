export function getQuantityLabel(cartItems, productId)
{
  const item = cartItems.find((item) => item.id === productId);
  return item ? `(${item.quantity})` : "";
}
