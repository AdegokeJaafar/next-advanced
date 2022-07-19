import Navigation from "../../../components/Header";

const Username = props => {
    const router = useRouter();
    const { postId } = router.query;

    console.log({router});

    return (
        <div>
            <h1>Username - {username}</h1>
        </div>
    )
}

export default Username;