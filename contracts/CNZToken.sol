// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract CNZToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("CNZChain", "CNZC") {
        // Mint function allows us to create Tokens
        _mint(msg.sender, initialSupply);
    }
}
