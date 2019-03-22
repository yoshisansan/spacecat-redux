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

export const shareAction = urlList => ({
  type: "SHARE",
  payload: urlList
});

export const gifList = list => ({
  type: 'GIF_LIST',
  payload: list
});

//Twiiter.js
export const tweetOn = () => ({
    type: "TWEET_ON"
});

export const tweetOff = () => ({
    type: "TWEET_OFF"
});

//Preloading.js
export const boolActionPreloading = flag => ({
  type: "FLAG_PRELOAD",
  payload: flag
});

export const preloadTag = Item => ({
  type: "TAG",
  payload: Item
})


let timeID = 0;

//スイッチオンとGIFデータ取得と不要データ削除とランダムdispatch
export const hitGiphy = bool => {
  return dispatch => {
//問題はsrcが読み込まれるたびにローディングしていること
  dispatch(waitSwitch());

  if(bool === true){
    console.log("スロット開始");
    dispatch(tweetOn());
    giphyAPI().then(res => {
      // const loop = list => {
      //     let random = Math.floor(Math.random() * list.length);
      //     dispatch(axiosGif(list[random]));
      //     timeID = setTimeout(() => {loop(list)}, 800);
      //     dispatch(switchOn());
      // };

      const data = res.data.data;
      const getUrls = data.map(item => item.images.downsized.url);
      const list = remove(getUrls);
      dispatch(gifList(list));
      const flag = false;
      dispatch(boolAction(flag));
      // loop(list)
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
