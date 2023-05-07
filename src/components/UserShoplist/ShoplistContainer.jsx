import UserproductCard from "../UserproductCard/UserproductCard"

function ShoplistContainer() {
    return (
        <div className="w-[95%] h-auto grid grid-cols-4 gap-4">
            <UserproductCard />
            <UserproductCard />
            <UserproductCard />
            <UserproductCard />
            <UserproductCard />
            <UserproductCard />
            <UserproductCard />
        </div>
    )
}

export default ShoplistContainer