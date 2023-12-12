export const Practice2 = () => {
    const getTotalFree = (num: number): number => {//num: numberでnumがnumber型であることを指定、実行前に型をチェックしてくれる
        const total = num * 1.1;
        return total
    }

    const onClickPractice = () => {
        console.log(getTotalFree(1000));
    }
    return (
        <div>
            <p>練習問題:返却値の型指定</p>
            <button onClick={onClickPractice}>練習問題２を実行</button>
        </div>
    );
};