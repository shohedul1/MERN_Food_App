
// import { IndianRupee } from "lucide-react";
// import { Separator } from "../ui/separator";
// import { Link } from "react-router-dom";
// import { Button } from "../ui/button";

// const Success = () => {
//   const orders = [1, 2, 3];
//   if (orders.length === 0)
//     return (
//       <div className="flex items-center justify-center min-h-screen">
//         <h1 className="font-bold text-2xl text-gray-700 dark:text-gray-300">
//           Order not found!
//         </h1>
//       </div>
//     );

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 px-4">
//       <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 max-w-lg w-full">
//         <div className="text-center mb-6">
//           <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
//             Order Status:{" "}
//             <span className="text-[#FF5A5A]">{"confirm".toUpperCase()}</span>
//           </h1>
//         </div>
//         <div className="mb-6">
//           <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">
//             Order Summary
//           </h2>
//           {/* Your Ordered Item Display here  */}
//           {['as', 'asd', 'asld'].map((order: any, index: number) => (
//             <div key={index}>
//               {order.map((item: any) => (
//                 <div className="mb-4">
//                   <div className="flex justify-between items-center">
//                     <div className="flex items-center">
//                       <img
//                         src={item.image}
//                         alt=""
//                         className="w-14 h-14 rounded-md object-cover"
//                       />
//                       <h3 className="ml-4 text-gray-800 dark:text-gray-200 font-medium">
//                         {/* {item.name} */}name
//                       </h3>
//                     </div>
//                     <div className="text-right">
//                       <div className="text-gray-800 dark:text-gray-200 flex items-center">
//                         <IndianRupee />
//                         <span className="text-lg font-medium">
//                           {/* {item.price} */}654
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                   <Separator className="my-4" />
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>
//         <Link to="/cart">
//           <Button className="bg-orange hover:bg-hoverOrange w-full py-3 rounded-md shadow-lg">
//             Continue Shopping
//           </Button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Success;


import { IndianRupee } from "lucide-react";
import { Separator } from "../ui/separator";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const Success = () => {
  // Each order contains an array of items
  const orders = [
    [
      { name: "Item 1", price: 654, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqGK3diR3Zi-mnOXEaj-3ewmFyRYVxGzVzZw&s" },
      { name: "Item 2", price: 876, image: "https://static.vecteezy.com/system/resources/thumbnails/036/053/722/small/ai-generated-cat-wearing-heart-shaped-sunglasses-lying-on-a-pillow-free-photo.jpeg" }
    ],
    [
      { name: "Item 3", price: 123, image: "https://static.vecteezy.com/system/resources/thumbnails/036/053/722/small/ai-generated-cat-wearing-heart-shaped-sunglasses-lying-on-a-pillow-free-photo.jpeg" }
    ]
  ];

  if (orders.length === 0)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="font-bold text-2xl text-gray-700 dark:text-gray-300">
          Order not found!
        </h1>
      </div>
    );

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 px-4">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 max-w-lg w-full">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
            Order Status:{" "}
            <span className="text-[#FF5A5A]">{"confirm".toUpperCase()}</span>
          </h1>
        </div>
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">
            Order Summary
          </h2>
          {/* Display Ordered Items */}
          {orders.map((order, index) => (
            <div key={index}>
              {order.map((item, itemIndex) => (
                <div className="mb-4" key={itemIndex}>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-14 h-14 rounded-md object-cover"
                      />
                      <h3 className="ml-4 text-gray-800 dark:text-gray-200 font-medium">
                        {item.name}
                      </h3>
                    </div>
                    <div className="text-right">
                      <div className="text-gray-800 dark:text-gray-200 flex items-center">
                        <IndianRupee />
                        <span className="text-lg font-medium">
                          {item.price}
                        </span>
                      </div>
                    </div>
                  </div>
                  <Separator className="my-4" />
                </div>
              ))}
            </div>
          ))}
        </div>
        <Link to="/cart">
          <Button className="bg-orange hover:bg-hoverOrange w-full py-3 rounded-md shadow-lg">
            Continue Shopping
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
