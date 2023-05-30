import ContentLoader from 'react-content-loader';

const ListItemLoader = () => (
    <ContentLoader
        speed={2}
        width={200}
        height={62}
        viewBox="0 0 200 62"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <rect x="72" y="16" rx="3" ry="3" width="150" height="15" />
        <rect x="72" y="38" rx="3" ry="3" width="74" height="13" />
        <rect x="0" y="15" rx="3" ry="3" width="40" height="33" />
    </ContentLoader>
);

export default ListItemLoader;
