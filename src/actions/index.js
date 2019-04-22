import giphyAPI from "../APIs/giphyAPI";
import remove from "../Removes/removeImg";

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

//スイッチオンとGIFデータ取得と不要データ削除とランダムdispatch
export const hitGiphy = bool => {
  return dispatch => {
//問題はsrcが読み込まれるたびにローディングしていること
  dispatch(switchOn());
  console.log("srcをローディング");

  if(bool === true){
    // console.log("スロット開始");
    dispatch(tweetOn());

    giphyAPI().then(res => {
      const data = res.data.data;
      const getUrls = data.map(item => item.images.downsized.url);
      const list = remove(getUrls);
      dispatch(gifList(list));
      const flag = false;
      dispatch(boolAction(flag));
    });
  }else{
    dispatch(switchOff());
    dispatch(tweetOff());
    // clearTimeout(timeID);
    const flag = true;
    dispatch(boolAction(flag));
    // clearTimeout(loop);
  }
    };
  };
