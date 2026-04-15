const Arr = () => {
    const a = [1, 2, 3, 4];

    return (
        <>
            {a.map((item) => (
                <p key={item}>{item * 4}</p>
            ))}
        </>
    );
};

export default Arr;