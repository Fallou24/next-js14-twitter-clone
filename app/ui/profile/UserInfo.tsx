import React from "react";

export default function UserInfo() {
  return (
    <div className="px-4">
        <h3 className="font-bold text-2xl">Fallou Ndiaye</h3>
        <p className="text-gray-color mb-4">@falloundiaye</p>
      <p className="mb-1">Web developer</p>
      <div className="flex gap-2">
        <p>
          <span className="font-medium mr-1">23</span>
          <span className="text-gray-color">abonnements</span>
        </p>
        <p>
          <span className="font-medium mr-1">23</span>
          <span className="text-gray-color">abonnés</span>
        </p>
      </div>
    </div>
  );
}
