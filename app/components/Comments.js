import React from 'react'

export default async function Comments({promise}) {

    const comments = await promise;

  return (
     <div className="mt-7">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Comments
          </h2>
          <ul className="space-y-6">
            {comments.map((comment) => (
              <li
                key={comment.id}
                className="bg-gray-50 p-5 rounded-md border border-gray-200 shadow-sm"
              >
                <h3 className="text-lg font-medium text-gray-900">
                  {comment.name}
                </h3>
                <p className="text-sm text-blue-600 mb-2">{comment.email}</p>
                <p className="text-gray-700">{comment.body}</p>
              </li>
            ))}
          </ul>
        </div>
  )
}
