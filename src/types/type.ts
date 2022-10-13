// 登录
export interface UserLoginType {
    username: string
    password: string
}

// 百货顶部轮播
export interface GroBannerType {
    id: number
    bannerPic: string
}
// 百货资讯
export interface GroceryNewsType {
    id: number
    title: string
    text: string
    cardPic: string
}
// 百货上新
export interface GroceryNewType {
    id: number
    picUrl: string
}
// 百货热销
export interface GroceryHotType {
    id: number
    brand: string
    hotPic: string
    name: string
    price: string
    detailPic: string
}
// 百货card
export interface CardListType {
    id: number
    brand: string
    deliveryPrice: string
    description: string
    detail: string
    pictureList: string
    tag: string
    price: string
    title: string
}

// 我的 会员图片
export interface VipPicType {
    id: number
    vipPic: string
    vipText: string
}

// 我的 礼包图片
export interface GiftPicType {
    id: number
    giftPic: string
    giftText: string
}

// 
export interface ProductType {
    id: number
    category: string
    cupSize: string
    goodsName:string
    goodsPicSwiper:string
    description:string
    price:number
    tagContent:string
}