let timeID = 0;
//スイッチオンとGIFデータ取得と不要データ削除とランダムdispatch
export const hitGiphy = bool => {
  return dispatch => {
//onloadで読み込み終わったらフラグを渡す
//for文でロード判定をつけて格納していく
  dispatch(waitSwitch());

  if(bool === true){
    console.log("スロット開始");
    dispatch(tweetOn());
    giphyAPI().then(res => {
      const loop = list => {
          let random = Math.floor(Math.random() * list.length);
          dispatch(axiosGif(list[random]));
          timeID = setTimeout(() => {loop(list)}, 800);
          dispatch(switchOn());
      };

      const data = res.data.data;
      const getUrls = data.map(item => item.images.downsized.url);
      const list = remove(getUrls);
      console.log(list);
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
