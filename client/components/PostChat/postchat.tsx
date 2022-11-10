// import React, { useEffect, useState } from "react";
// import { AiFillDelete } from "react-icons/ai";
// import { TiEdit } from "react-icons/ti";
// import { MdOutlineClose } from "react-icons/md";
// import { FiSend } from "react-icons/fi";
// import useChat from "../../hooks/useChat";
// import { api } from "../../store/api/api";

// const ChatScreen = () => {
//     const { data } = api.useGetProfileQuery();

//     // const { messages, log, chatActions } = useChat();

//     const [content, setContent] = useState<string>("");

//     const [editingState, setEditingState] = useState(false);

//     const [editingMessageId, setEditingMessageId] = useState(0);

//     const changeText = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setContent(e.target.value);
//     };
//     const sendMessage = (e: React.FormEvent) => {
//         e.preventDefault();

//         const trimmed = content.trim();
//         if (!trimmed) return;

//         const message = {
//             id: data?.id,
//             content,
//         };

//         if (editingState) {
//             chatActions.update({ id: editingMessageId, content });
//             setEditingState(false);
//         } else {
//             data && chatActions.send({ id: data.id, content });
//         }
//         setContent("");
//     };

//     const removeMessage = (id: number) => {
//         chatActions.remove({ id });
//     };

//     useEffect(() => {
//         if (!log) return;
//     }, [log]);

//     return (
//         <>
//             <h1 className="title">Let's Chat</h1>
//             <div className="flex-1 flex flex-col">
//                 {messages &&
//                     messages.length > 0 &&
//                     messages.map((message) => {
//                         // определяем принадлежность сообщения пользователю
//                         const isMsgBelongsToUser = message.id === data?.id;

//                         return (
//                             <div
//                                 key={message.id}
//                                 // цвет фона сообщения зависит от 2 факторов:
//                                 // 1) принадлежность пользователю;
//                                 // 2) состояние редактирования
//                                 className={[
//                                     "my-2 p-2 rounded-md text-white w-1/2",
//                                     isMsgBelongsToUser
//                                         ? "self-end bg-green-500"
//                                         : "self-start bg-blue-500",
//                                     editingState ? "bg-gray-300" : "",
//                                 ].join(" ")}
//                             >
//                                 <div className="flex justify-between text-sm mb-1">
//                                     <p>
//                                         By <span>{message.id}</span>
//                                     </p>
//                                 </div>
//                                 <p>{message.content}</p>
//                                 {/* пользователь может редактировать и удалять только принадлежащие ему сообщения */}
//                                 {isMsgBelongsToUser && (
//                                     <div className="flex justify-end gap-2">
//                                         <button
//                                             disabled={editingState}
//                                             className={`${
//                                                 editingState
//                                                     ? "hidden"
//                                                     : "text-orange-500"
//                                             }`}
//                                             // редактирование сообщения
//                                             onClick={() => {
//                                                 setEditingState(true);
//                                                 setEditingMessageId(message.id);
//                                                 setContent(message.content);
//                                             }}
//                                         >
//                                             <TiEdit />
//                                         </button>
//                                         <button
//                                             disabled={editingState}
//                                             className={`${
//                                                 editingState
//                                                     ? "hidden"
//                                                     : "text-red-500"
//                                             }`}
//                                             // удаление сообщения
//                                             onClick={() => {
//                                                 removeMessage(message.id);
//                                             }}
//                                         >
//                                             <AiFillDelete />
//                                         </button>
//                                     </div>
//                                 )}
//                             </div>
//                         );
//                     })}
//             </div>
//             {/* отправка сообщения */}
//             <form onSubmit={sendMessage} className="flex items-stretch">
//                 <div className="flex-1 flex">
//                     <input
//                         type="text"
//                         id="message"
//                         name="message"
//                         value={content}
//                         onChange={changeText}
//                         required
//                         autoComplete="off"
//                         className="input flex-1"
//                     />
//                 </div>
//                 {editingState && (
//                     <button
//                         className="btn-error"
//                         type="button"
//                         // отмена редактирования
//                         onClick={() => {
//                             setEditingState(false);
//                             setContent("");
//                         }}
//                     >
//                         <MdOutlineClose fontSize={18} />
//                     </button>
//                 )}
//                 <button className="btn-primary">
//                     <FiSend fontSize={18} />
//                 </button>
//             </form>
//         </>
//     );
// };

// export default ChatScreen;
