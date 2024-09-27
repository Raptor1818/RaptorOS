import React, { useEffect, useRef, useState } from 'react';
import css from '@/styles/raptorOS/Applications/System/BackgroundPicker/BgUpload.module.css';
import Button from '@/components/ui/Button';
import { CgSoftwareUpload } from "react-icons/cg";

interface Props {
  onBackgroundSelect: (url: string) => void;
}

const BgUpload: React.FC<Props> = ({ onBackgroundSelect }) => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [isDragActive, setIsDragActive] = useState(false);

  const handleFileUpload = () => {
    // Handle file upload and disables button
    if (fileInputRef.current) {
      setIsUploading(true);
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Check if any files were selected
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      setUploadedFile(selectedFile);
      setIsUploading(false);

      // Convert file to Base64 and call the background selection handler
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        onBackgroundSelect(base64String);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragActive(true);
  };

  const handleDragLeave = () => {
    setIsDragActive(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      // Set uploaded file
      const droppedFile = e.dataTransfer.files[0];
      setUploadedFile(droppedFile);

      // Convert file to Base64 and call the background selection handler
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        onBackgroundSelect(base64String);
      };
      reader.readAsDataURL(droppedFile);
    }
  };

  // Reset isUploading when the window gains focus
  useEffect(() => {
    const handleFocus = () => {
      setIsUploading(false);
    };

    window.addEventListener('focus', handleFocus);

    return () => {
      window.removeEventListener('focus', handleFocus);
    };
  }, []);

  return (
    <div className={css.pickerUpload}>
      <p>or upload an image</p>
      <div
        className={`${css.pickerUploadInput} ${isDragActive ? css.dragActive : ''}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          capture="environment"
          onChange={handleFileChange}
        />

        <Button
          prefix={<CgSoftwareUpload />}
          isLoading={isUploading}
          size="lg"
          onClick={handleFileUpload}
        >
          Choose File
        </Button>

        <p>{uploadedFile ? uploadedFile.name : 'Drag and drop an image file here'}</p>
      </div>
    </div>
  );
};

export default BgUpload;
