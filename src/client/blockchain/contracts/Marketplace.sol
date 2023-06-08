// SPDX-License-Identifier: MIT

// 10 % cut ours
// rating for seller
// roles: admin US, seller and buyer
// machinery equpment storage

pragma solidity ^0.8.0;

contract Marketplace {
    address payable public owner;
    // image
    struct Product {
        uint256 id;
        string name;
        string description;
        uint256 price;
        uint256 quantity;
        uint256 onSale;
        address payable seller;
        bool isPurchased;
        string feedback;
    }

    mapping(uint => Product) public products;
    uint public productCount = 0;

    event ProductCreated(
        uint256 id,
        string name,
        string description,
        uint256 price,
        uint256 quantity,
        uint256 onSale,
        address payable seller,
        bool isPurchased
    );

    event ProductPurchased(
        uint id,
        string name,
        uint price,
        uint256 quantity,
        uint256 onSale,
        address payable seller,
        bool isPurchased,
        string feedback
    );

    constructor() {
        owner = payable(msg.sender);
    }

    function createProduct(
        string memory _name,
        string memory _description,
        uint _price,
        uint256 _quantity,
        uint256 _onSale
    ) public {
        require(
            bytes(_name).length > 0 && bytes(_description).length > 0,
            "Name and description must be provided"
        );
        require(_price > 0, "Price must be greater than zero");
        require(_quantity >= _onSale, "Quantity must be more than ");

        productCount++;
        products[productCount] = Product(
            productCount,
            _name,
            _description,
            _price,
            _quantity,
            _onSale,
            payable(msg.sender),
            false,
            ""
        );

        emit ProductCreated(
            productCount,
            _name,
            _description,
            _price,
            _quantity,
            _onSale,
            payable(msg.sender),
            false
        );
    }

    function purchaseProduct(uint _productId) public payable {
        Product storage product = products[_productId];
        require(
            product.id > 0 && product.id <= productCount,
            "Invalid product ID"
        );
        require(!product.isPurchased, "Product has already been purchased");
        require(msg.value >= product.price, "Insufficient funds");

        product.seller.transfer(product.price);
        product.isPurchased = true;

        emit ProductPurchased(
            product.id,
            product.name,
            product.price,
            product.price,
            product.quantity,
            product.seller,
            true,
            product.feedback
        );
    }
}
