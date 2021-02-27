// let myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!'; //JS注释

// document.querySelector('body').onclick = function() {
//     alert('别戳我，我怕疼。');
// }

// 设置图片切换
let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/lip.jpeg') {
      myImage.setAttribute('src', 'images/pose.gif');
    } else {
      myImage.setAttribute('src', 'images/lip.jpeg');
    }
}

// 设置个性化欢迎信息
// 获取新按钮和标题的引用
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

// 个性化欢迎信息设置函数
function setUserName() {
    let myName = prompt('你是哪位世界冠军：');
    if (!myName || myName === null) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Hello，Waacker ' + myName;
    }
  }

// 初始化代码：在页面初次读取时进行构造工作：
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Hello，Waacker ' + storedName;
}

// 为按钮设置 onclick 事件处理器：
myButton.onclick = function() {
    setUserName();
 }