// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

import "@openzeppelin/contracts@4.7.0/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts@4.7.0/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts@4.7.0/security/Pausable.sol";
import "@openzeppelin/contracts@4.7.0/access/Ownable.sol";
import "@openzeppelin/contracts@4.7.0/utils/Counters.sol";

contract ArtistNotFound is ERC721, ERC721Enumerable, Pausable, Ownable {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;

    //Declaring final variables for mint price and max supply.
    uint256 public MINT_PRICE = 0.05 ether;
    uint256 public MAX_SUPPLY = 150; 

    constructor() ERC721("ArtistNotFound", "ANF") {
        //Token ID begins at 1
        _tokenIdCounter.increment();
    }

    function withdraw() public onlyOwner() {
        require(address(this).balance > 0, "Balance is zero.");
        payable(owner()).transfer(address(this).balance);
    }

    

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

// ============ Minting Function ============ //

    
    function safeMint(address to) public payable {
    //Checking to make sure ether value being sent is sufficient    
        require(totalSupply() < MAX_SUPPLY, "Cannot mint anymore tokens.");

        //Checking to make sure ether value being sent is sufficient
        require(msg.value >= MINT_PRICE, "Not enough ether sent.");
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
    }

    function _baseURI() internal pure override returns (string memory) {
            return "ipfs://ArtistNotFoundBaseURI/";
        }

    function _beforeTokenTransfer(address from, address to, uint256 tokenId)
        internal
        whenNotPaused
        override(ERC721, ERC721Enumerable)
    {
        super._beforeTokenTransfer(from, to, tokenId);
    }

    // The following functions are overrides required by Solidity.

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721Enumerable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}