export const Practice3 = () => {
    const getTotalFree = (num: number): number => {//num: numberでnumがnumber型であることを指定、実行前に型をチェックしてくれる
        const total = num * 1.1;
        return total;
    };

    const onClickPractice = () => {
        let total: number = 0;
        total = getTotalFree(1000);
        console.log(total);
    };
    return (
        <div>
            <p>練習問題:変数の型指定</p>
            <button onClick={onClickPractice}>練習問題3を実行</button>
        </div>
    );
};