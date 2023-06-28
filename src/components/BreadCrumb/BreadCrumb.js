import Breadcrumb from 'react-bootstrap/Breadcrumb';

const BreadCrumb = ({ page }) => {
    return (
        <Breadcrumb className='mt-4'>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>

            <Breadcrumb.Item active>{page}</Breadcrumb.Item>
        </Breadcrumb>
    )
}

export default BreadCrumb;