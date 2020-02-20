pragma solidity ^0.4.8;

contract RecvEther {
    address public sender; // 보내는 주소 확인용 변수 
    uint public recvEther; // 받은 Ether (합계)

    // 송금받기 
    function () payable {
        sender = msg.sender; // 확인을 위한 상태 변수 갱신 
        recvEther += msg.value;
    }   
}