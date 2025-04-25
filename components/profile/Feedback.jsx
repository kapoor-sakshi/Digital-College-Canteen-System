import React, { useEffect, useState } from "react";
import Title from "../ui/Title";
import axios from "axios";
import { useSession } from "next-auth/react";
import Link from "next/link";

const UserFeedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  const { data: session } = useSession();

  useEffect(() => {
    const getData = async () => {
      try {
        // Get user data
        const userRes = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users`);
        const user = userRes.data.filter((user) => user.email === session.user.email)[0];
        setCurrentUser(user);

        // Get feedback
        const feedbackRes = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/feedback`);
        setFeedbacks(feedbackRes.data.filter(fb => fb.customer === user?.fullName));
      } catch (error) {
        console.log(error);
      }
    };
    if (session) getData();
  }, [session]);

  return (
    <div className="lg:p-8 flex-1 lg:mt-0 mt-5">
      <div className="flex justify-between items-center">
        <Title addClass="text-[40px]">My Feedback</Title>
        <Link href="/feedback" className="btn-primary !bg-blue-600">
          Submit New Feedback
        </Link>
      </div>
      
      <div className="overflow-x-auto w-full mt-5">
        <table className="w-full text-sm text-center text-gray-500 xl:min-w-[1000px]">
          <thead className="text-xs text-gray-400 uppercase bg-gray-700">
            <tr>
              <th scope="col" className="py-3 px-6">RATING</th>
              <th scope="col" className="py-3 px-6">BEST ITEM</th>
              <th scope="col" className="py-3 px-6">FEEDBACK</th>
              <th scope="col" className="py-3 px-6">DATE</th>
            </tr>
          </thead>
          <tbody>
            {feedbacks.map((feedback) => (
              <tr
                className="transition-all bg-secondary border-gray-700 hover:bg-primary"
                key={feedback._id}
              >
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  {feedback.rating} ★
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  {feedback.bestItem}
                </td>
                <td className="py-4 px-6 font-medium hover:text-white">
                  {feedback.feedback}
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  {new Date(feedback.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserFeedback;