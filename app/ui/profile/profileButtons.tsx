export default function ProfileButtons() {
  return (
    <div className="flex justify-end gap-2 m-4">
      <button className="bg-white text-black rounded-3xl px-6 p-1">
        Suivre
      </button>
      <button className="border border-white rounded-3xl px-6 p-1">
        Editer le profil
      </button>
    </div>
  );
}
