export const Practice4 = () => {
    const calcTotalFree = (num) => {//num: numberでnumがnumber型であることを指定、実行前に型をチェックしてくれる
        const total = num * 1.1;
        console.log(total);
    }

    const onClickPractice = () => calcTotalFree(1000);//`1,000`にするとNaNと表示される（文字列を数字に変換できないため）
    return (
        <div>
            <p>練習問題:設定ファイルを触ってみる</p>
            <button onClick={onClickPractice}>練習問題４を実行</button>
        </div>
    );
};