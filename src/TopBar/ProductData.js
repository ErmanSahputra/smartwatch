const ProductData = {
    title: 'FitBit 19 - The Smartest Watch',
    description: 'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor.',
    colorOptions: [
        {
            styleName: 'Black Strap',
            imageUrl: 'https://ae01.alicdn.com/kf/Hfb964926a62b4170ad3f33ad78ea721aE.jpg_640x640Q90.jpg_'
        },
        {
            styleName: 'Blue Strap',
            imageUrl: 'https://ae01.alicdn.com/kf/H5ec668d9c9b04a0492905a1ba601ff53l.jpg_640x640Q90.jpg_'
        },
        {
            styleName: 'Red Strap',
            imageUrl: 'https://ae01.alicdn.com/kf/H006a506c8e9a49c7815f619a466c56b43.jpg_640x640Q90.jpg_'
        },
        {
            styleName: 'White Strap',
            imageUrl: 'https://ae01.alicdn.com/kf/H4d592039a7b7498cb8ac10ff26ea4b4bR.jpg_640x640Q90.jpg_'
        },
    ],
    featureList: [
        "Time", "Heart Rate"
    ]
}

Object.freeze(ProductData); //This line of code just makes your object as a constant. No values can be updated.

export default ProductData;