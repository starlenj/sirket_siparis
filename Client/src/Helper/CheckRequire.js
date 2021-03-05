export const CheckEkmek = (Product, Order) => {
    return Product.SelectOption.map((options) => {
        if (options.Options[0].Name === "Ekmek Seçimi") {
            if (Order.EkmekOption.length === 0) {
                return false;
            }
        }
    });
}