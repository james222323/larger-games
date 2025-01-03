import re
import requests
import os
import tkinter as tk
from tkinter import filedialog, messagebox

def extract_urls(text):
    url_pattern = re.compile(r'http://127\.0\.0\.1:5500[^\s\'"?]+')
    return url_pattern.findall(text)

def replace_and_download(urls, base_url, download_dir):
    session = requests.Session()
    session.headers.update({
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Referer': base_url,
        'Accept-Language': 'en-US,en;q=0.9',
        'Origin': base_url,
        'Cache-Control': 'no-cache'
    })

    for url in urls:
        new_url = url.replace('http://127.0.0.1:5500', base_url)
        print(f"Original URL: {url} -> New URL: {new_url}")
        download_file(new_url, base_url, download_dir, session)

def download_file(url, base_url, download_dir, session):
    response = session.get(url)
    
    print(f"Status Code: {response.status_code}")
    
    if response.status_code == 200:
        path_parts = os.path.relpath(url, base_url + '/')
        filepath = os.path.normpath(os.path.join(download_dir, path_parts))
        os.makedirs(os.path.dirname(filepath), exist_ok=True)
        with open(filepath, 'wb') as file:
            file.write(response.content)
        print(f"Downloaded: {filepath}")
    else:
        print(f"Failed to download {url} - Error: {response.reason}")

def choose_directory():
    directory = filedialog.askdirectory()
    if directory:
        directory_entry.delete(0, tk.END)
        directory_entry.insert(0, directory)

def start_download():
    user_input = text_input.get("1.0", tk.END).strip()
    base_url = url_entry.get().strip()
    download_dir = directory_entry.get().strip()
    if not user_input or not base_url or not download_dir:
        messagebox.showerror("Error", "Please enter text, a base URL, and select a download directory.")
        return
    urls = extract_urls(user_input)
    replace_and_download(urls, base_url, download_dir)
    messagebox.showinfo("Success", "Download process completed.")

# GUI Setup
root = tk.Tk()
root.title("URL Downloader")
root.geometry("500x500")

frame = tk.Frame(root)
frame.pack(padx=10, pady=10)

url_label = tk.Label(frame, text="Base URL to Replace With:")
url_label.pack(pady=5)
url_entry = tk.Entry(frame, width=50)
url_entry.pack(pady=5)

text_label = tk.Label(frame, text="Enter Text Containing URLs:")
text_label.pack(pady=5)
text_input = tk.Text(frame, height=10, width=50)
text_input.pack(pady=5)

directory_label = tk.Label(frame, text="Select Download Directory:")
directory_label.pack(pady=5)
directory_entry = tk.Entry(frame, width=40)
directory_entry.pack(side=tk.LEFT, padx=5)
directory_button = tk.Button(frame, text="Browse", command=choose_directory)
directory_button.pack(side=tk.LEFT)

start_button = tk.Button(frame, text="Start Download", command=start_download)
start_button.pack(pady=20)

root.mainloop()
