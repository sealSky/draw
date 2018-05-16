window.onload = function() {
    // 人名数组
    let candidates = ['张三','李四','王五','小明','小芳','小花','德玛','盖伦','剑圣','李青','女刀锋','男刀锋','蛮王','赵信','寒冰','瑞萌萌','儿童劫','托儿索','鸡毛信','小鱼人','暗夜猎手','霞','洛']
    let checkouts = [];

    let users = document.querySelector('#users');
    let prize = document.querySelector('#prize');
    let titleName = this.document.querySelector('.title-name');
    
    let liHtml = '';
    let prizeHtml = '';
    
    candidates.forEach((item,index) => {
        liHtml += '<li>'+item+'</li>'
    });
    // console.log(liHtml);
    users.innerHTML = liHtml;
    // 人名数组
    let liArr = users.querySelectorAll('li');

    let start = this.document.querySelector('.start');
    let stop = this.document.querySelector('.stop');
    // 设置定时器
    let draw = null;
    // 取随机数
    let random;
    
    function Random() {
        draw = setInterval(function(){
            random = Math.floor(Math.random()*candidates.length);
            // console.log(random);
            liArr.forEach((item, index) => {
                if(index === random ) {
                    item.classList.add('active');
                    // console.log(index);
                }else {
                    item.classList.remove('active');
                }
            })
        },100)
    }
    
 
    // 点击开始
    start.onclick = function () {
        clearInterval(draw);
        // console.log(checkouts.length);
        if (checkouts.length < 3) {
            Random();
        }else {
            alert('已经结束抽奖了');
            return false;
        }
    }
    // 点击停止
    stop.onclick = function () {
        if (checkouts.length < 3) {
            checkouts.push(candidates[random]);
            candidates.splice(random, 1);
            // console.log(candidates);
            clearInterval(draw);
            titleName.innerText = '获奖名单';
            liHtml = '';
            candidates.forEach((item,index) => {
                liHtml += '<li>'+item+'</li>'
            });
            // console.log(liHtml);
            users.innerHTML = liHtml;
            prizeHtml = '';
            checkouts.forEach((item,index) => {
                prizeHtml += '<li>'+item+'</li>'
            })
            prize.innerHTML = prizeHtml;
        } else {
            return false;
        }
    }

}