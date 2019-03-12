import giphyAPI from "../APIs/giphyAPI";
import remove from "../Removes/removeImg";

export const axiosGif = data => ({
  type: "GET_GIF",
  payload: data
});

//Switch.js
export const switchOn = () => ({
  type: "SWITCH_ON"
});

export const switchOff = () => ({
  type: "SWITCH_OFF"
});

export const waitSwitch = () => ({
  type: "WAIT"
});

//GetGif.js
export const boolAction = flag => ({
  type: "FLAG",
  payload: flag
});

//Twiiter.js
export const tweetOn = () => ({
    type: "TWEET_ON"
});

export const tweetOff = () => ({
    type: "TWEET_OFF"
});


let timeID = 0;
//スイッチオンとGIFデータ取得と不要データ削除とランダムdispatch
export const hitGiphy = bool => {
  return dispatch => {

//onloadで読み込み終わったらフラグを渡す
//for文でロード判定をつけて格納していく
  if(bool === true){
    console.log("スロット開始");
    dispatch(switchOn());
    dispatch(tweetOn());
    giphyAPI().then(res => {
      const loop = list => {
          let random = Math.floor(Math.random() * list.length);
          dispatch(axiosGif(list[random]));
          timeID = setTimeout(() => {loop(list)}, 800);
      };

      const data = res.data.data;
      const getUrls = data.map(item => item.images.downsized.url);
      const list = remove(getUrls);
      const flag = false;
      dispatch(boolAction(flag));
      loop(list)
    });
  }else{
    console.log("FALSE");
    dispatch(switchOff());
    dispatch(tweetOff());
    clearTimeout(timeID);
    console.log("timeクリア");
    const flag = true;
    dispatch(boolAction(flag));
    // clearTimeout(loop);
  }


    };
  };


//うまくいかないので保留。２回目のスロット開始。axiosで再取得すると面倒なのでurlListを使い回す
// export const switchAgain = list => {
//     return dispatch => {
//       dispatch(switchOn());
//       this.loop(list);
//
//       const loop = list => {
//           setTimeout(() => {
//             console.log(list.length);
//             let random = Math.floor(Math.random() * list.length);
//             dispatch(axiosGif(list[random]));
//             loop(list);
//         }, 1000);
//     };
//
//   };
// };
