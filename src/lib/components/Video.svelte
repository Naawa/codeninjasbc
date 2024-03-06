<div>
    <video autoplay loop muted>
        <source src="https://codeninjasbc.com/wp-content/uploads/2024/01/CNBC-Website-Shortened-1.mp4">
    </video>
</div>

<style lang="scss">
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        background-color: rgb(0, 130, 139);

        video {
            width: 100%;
            filter: opacity(75%);
        }
    }

    @media (width < 1200px) {
        video {
            height: 100%;
            width: 100%;
        }
    }
</style>