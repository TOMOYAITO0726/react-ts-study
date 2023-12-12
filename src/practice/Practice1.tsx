export const Practice1 = () => {
    const calcTotalFree = (num: number) => {//num: numberでnumがnumber型であることを指定、実行前に型をチェックしてくれる
        const total = num * 1.1;
        console.log(total);
    }

    const onClickPractice = () => calcTotalFree(1000);//`1,000`にするとNaNと表示される（文字列を数字に変換できないため）
    return (
        <div>
            <p>練習問題:引数の型指定</p>
            <button onClick={onClickPractice}>練習問題１を実行</button>
        </div>
    );
};