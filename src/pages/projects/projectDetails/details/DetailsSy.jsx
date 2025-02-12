import './style.scss';

// Reusable Component for Details Box
const DetailsBox = ({ title, items }) => (
    <div className="box">
        <h2>{title}</h2>
        <div className={` ${items.length >= 4 ? 'grid_item' : ''}`}>
            {items.map((item, index) => (
                <div className="item" key={index}>
                    <h3>{item.label}</h3>
                    <p>{item.value}</p>
                </div>
            ))}
        </div>
    </div>
);


const DetailsSy = () => {
    // Data for each section
    const customerInfo = [
        { label: 'Name', value: 'John Doe' },
        { label: 'Address', value: '123 Alphabet Street, Huddersfield, HD2 1FA, United Kingdom' },
        { label: 'Telephone', value: '07795 123 456' },
    ];

    const companyDetails = [
        { label: 'Company Name', value: 'Doe Associates Ltd' },
        { label: 'Surveyor name', value: 'Dumas Harry' },
    ];

    const orderOptions = [
        { label: 'Additional Charge Point', value: '2' },
        { label: 'Additional Remote Controls', value: '1' },
        { label: 'Foot Covers', value: 'Yes' },
        { label: 'Wall Brackets', value: 'Yes' },
    ];

    const stairliftSpecs = [
        { label: 'Installation Side', value: 'Left' },
        { label: 'Upholstery Colour', value: 'Beige' },
        { label: 'Swivel Type', value: 'Manual' },
        { label: 'Powered Hinge', value: 'Yes' },
        { label: 'Additional Charge Point', value: 'Yes' },
        { label: 'Additional Remote Controls', value: '1' },
        { label: 'Delivery Type', value: 'Installation' },
    ];

    const staircaseSpecs = [
        { label: 'Length', value: '3600mm' },
        { label: 'Width', value: '900mm' },
        { label: 'Angle', value: '35' },
        { label: 'Guardrail', value: 'Yes' },
        { label: 'Handrail to Remove', value: 'Yes' },
        { label: 'Bulkhead Height', value: '700mm' },
        { label: 'Above Riser', value: '4' },
    ];

    const user1Details = [
        { label: 'Weight', value: '85kg' },
        { label: 'Seat to Head', value: '900mm' },
        { label: 'Back to Knee', value: '900mm' },
        { label: 'Seat to Floor', value: '850mm' },
    ];

    const user2Details = [
        { label: 'Weight', value: '85kg' },
        { label: 'Seat to Head', value: '900mm' },
        { label: 'Back to Knee', value: '900mm' },
        { label: 'Seat to Floor', value: '850mm' },
    ];

    return (
        <div className="detailsPR">
            <div className="grid">
                <DetailsBox title="Customer Information" items={customerInfo} />
                <DetailsBox title="Company Details" items={companyDetails} />
                <DetailsBox title="Order Options" items={orderOptions} />
                <DetailsBox title="Stairlift Specifications" items={stairliftSpecs} />
                <DetailsBox title="Staircase Specifications" items={staircaseSpecs} />
                <DetailsBox title="User 1 Details" items={user1Details} />
                <DetailsBox title="User 2 Details" items={user2Details} />
            </div>
        </div>
    );
};

export default DetailsSy;
