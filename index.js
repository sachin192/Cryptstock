ws= new WebSocket(
    'wss://stream.binance.com:9443/ws/btcusdt@trade'
);
price=0;
old_price=0;
ws.onmessage=(Event)=>{
    data=JSON.parse(Event.data);
    price = parseFloat(data.p).toFixed(2);
    if(price>old_price){
        trade.style.color="green"
    }else if(price==old_price){
        trade.style.color="white";
    }else{
        trade.style.color="red";
    }
    old_price = price;
    trade.innerText = parseFloat(data.p).toFixed(2);
}
ws= new WebSocket(
    'wss://stream.binance.com:9443/ws/ethusdt@trade'
);

ws.onmessage=(Event)=>{
    data=JSON.parse(Event.data);
    trade1.innerText = parseFloat(data.p).toFixed(2);
}
ws= new WebSocket(
    'wss://stream.binance.com:9443/ws/dogeusdt@trade'
);
ws.onmessage=(Event)=>{
    data=JSON.parse(Event.data);
    trade2.innerText = parseFloat(data.p).toFixed(5);
}