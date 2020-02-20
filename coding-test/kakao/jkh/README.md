# Start Api

----------

```
  /**
   * @param {string} a - 층수
   * @param {string} b - 엘레베이터수
   */
   
   startElevator(a, b)
    
```

# Example

----------

```
    <div class="inputView">
        층: <input type="text" id="inputFloorSize"> 엘레베이터 : <input type="text" id="inputElevatorSize"> <button onClick="startElevator('inputFloorSize','inputElevatorSize')">확인</button>
    </div>
```

# Required

----------

```
    <div class="mainContainer">
        <div id="floorButtonContainer" class="floorButtonContainer">버튼 영역</div>
        <div id="elevatorContainer" class="elevatorContainer">
            <div class="elevatorLine">
                엘레베이터 영역
            </div>
        </div>
    </div>
```

* floorButtonContainer - 층버튼을 그리는 영역

* elevatorContainer - 엘레베이터를 그리는 영역


# Structure

----------

* startElevator call => RenderController render 

* user button click => ElevatorController UI



# Library

----------

* babel-polyfill.js and polyfill.js - 구 브라우저 지원

[https://babeljs.io](https://babeljs.io/)

* moment.js - 날짜 시간 관련 라이브러리

[momentjs.com](momentjs.com)


