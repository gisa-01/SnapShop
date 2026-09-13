import { CartComponentData } from "@/data/cartComponentData";
import { FlashSaleData } from "@/data/flashSale";
import { bannerData } from "@/data/heroBannerData";
import { JustForYouData } from "@/data/justForYou";
import { WhishlistCardData } from "@/data/wishlistCard";

const hasUniqueIds = (items: { id: string }[]) =>
  new Set(items.map((item) => item.id)).size === items.length;

describe("SnapShop product data", () => {
  it("provides five complete hero banners for the home screen", () => {

    const expectedBannerCount = 5;

    const hasBannerContent = bannerData.every(
      (banner) => banner.title && banner.subtitle && banner.callout && banner.image,
    );

    expect(bannerData).toHaveLength(expectedBannerCount);
    expect(hasUniqueIds(bannerData)).toBe(true);
    expect(hasBannerContent).toBe(true);
  });

  it("provides flash-sale items with a percentage discount", () => {

    const discountFormat = /^-\d+%$/;

    // Act
    const hasValidDiscounts = FlashSaleData.every((item) =>
      discountFormat.test(item.discount),
    );

    expect(FlashSaleData).toHaveLength(6);
    expect(hasUniqueIds(FlashSaleData)).toBe(true);
    expect(hasValidDiscounts).toBe(true);
  });

  it("provides cart items with the details required by CartComponent", () => {

    const priceFormat = /^\$\d+,\d{2}$/;

    const hasCompleteCartItems = CartComponentData.every(
      (item) =>
        item.image &&
        item.description &&
        item.color &&
        item.size &&
        priceFormat.test(item.price),
    );

    expect(CartComponentData).toHaveLength(6);
    expect(hasUniqueIds(CartComponentData)).toBe(true);
    expect(hasCompleteCartItems).toBe(true);
  });

  it("provides wishlist items with current and previous prices", () => {

    const priceFormat = /^\$\d+,\d{2}$/;


    const hasCompleteWishlistItems = WhishlistCardData.every(
      (item) =>
        item.image &&
        item.description &&
        item.color &&
        item.size &&
        priceFormat.test(item.oldPrice) &&
        priceFormat.test(item.price),
    );

    expect(WhishlistCardData).toHaveLength(6);
    expect(hasUniqueIds(WhishlistCardData)).toBe(true);
    expect(hasCompleteWishlistItems).toBe(true);
  });

  it("provides just-for-you items with display text and a price", () => {

    const priceFormat = /^\$\d+,\d{2}$/;


    const hasCompleteItems = JustForYouData.every(
      (item) => item.image && item.discription && priceFormat.test(item.price),
    );


    expect(JustForYouData).toHaveLength(6);
    expect(hasUniqueIds(JustForYouData)).toBe(true);
    expect(hasCompleteItems).toBe(true);
  });
});
