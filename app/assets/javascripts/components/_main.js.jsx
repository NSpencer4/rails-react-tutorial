const styles = {
    margin: "1em",
    padding: "1em",
    border: "1px solid #ddd"
};

const Main = props => {
    return (
        <div style={styles}>
            <div>
                <h1>React RoR Blog</h1>
            </div>
            <ArticlesContainer />
        </div>
    );
};