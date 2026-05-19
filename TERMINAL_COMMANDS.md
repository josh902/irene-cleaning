# 🚀 EXACT TERMINAL COMMANDS - Copy & Paste Ready

## Open PowerShell or Command Prompt

Press: `Windows Key + R`, type `powershell`, hit Enter

---

## STEP 1: Navigate to Your Project Folder

```powershell
cd "c:\Irenes Web"
```

✓ Your cursor should now be in the project folder

---

## STEP 2: Configure Git (First Time Only)

```powershell
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"
```

Replace "Your Name" and "your-email@example.com" with your actual info.

---

## STEP 3: Initialize Git Repository

```powershell
git init
```

You should see: `Initialized empty Git repository`

---

## STEP 4: Add All Files to Git

```powershell
git add .
```

(This stages all files for commit - no output is normal)

---

## STEP 5: Create First Commit

```powershell
git commit -m "Initial commit: Jophrey Cleaning Services - Production Ready"
```

You should see output like:
```
[main (root-commit) abc1234] Initial commit: ...
 27 files changed, ...
```

---

## STEP 6: Add Remote Repository (Replace josh902 with YOUR username)

```powershell
git remote add origin https://github.com/josh902/irene-cleaning.git
```

⚠️ Make sure to replace `josh902` with your GitHub username!

---

## STEP 7: Rename Branch to Main

```powershell
git branch -M main
```

---

## STEP 8: Push Code to GitHub

```powershell
git push -u origin main
```

**First time:** Git will ask for authentication
- Look for a pop-up window or browser to authenticate
- Click through to authorize
- Return to terminal when done

You should see:
```
Enumerating objects: 27, done.
...
 * [new branch]      main -> main
 * [new branch]      main -> origin/main
```

---

## ✅ Code Pushed to GitHub!

Check GitHub: https://github.com/josh902/irene-cleaning

You should see all your files there!

---

## NEXT: Deploy to Vercel

1. Go to: **https://vercel.com/new**
2. Click **Import Project**
3. Select **GitHub**
4. Find **irene-cleaning**
5. Click **Import**
6. Review settings (should be auto-detected as Next.js)
7. Click **Deploy**

Vercel will build and deploy automatically (~2 minutes)

---

## 📝 Commands Summary (Copy All At Once)

If you want to run all commands together in PowerShell:

```powershell
cd "c:\Irenes Web"; `
git config --global user.name "Your Name"; `
git config --global user.email "your@email.com"; `
git init; `
git add .; `
git commit -m "Initial commit: Jophrey Cleaning Services - Production Ready"; `
git remote add origin https://github.com/josh902/irene-cleaning.git; `
git branch -M main; `
git push -u origin main
```

⚠️ Still need to:
- Replace "Your Name" and "your@email.com"
- Replace `josh902` with your GitHub username

---

## ❓ If You Get Errors

### Error: "fatal: not a git repository"
**Fix:** Run `git init` first

### Error: "fatal: remote origin already exists"
**Fix:** Run: `git remote remove origin` then try step 6 again

### Error: "fatal: The current branch main has no upstream branch"
**Fix:** The command worked - just means first push. Continue to next step.

### Error: "Authentication failed"
**Fix:** Check your GitHub username and repository name are correct. Try again.

### Error: "Permission denied (publickey)"
**Fix:** You might need to set up SSH keys. Use HTTPS method instead.

---

## ✅ Success Message

When everything works, you'll see:
```
Enumerating objects: 27, done.
Counting objects: 100% (27/27), done.
Delta compression using up to 8 threads
Compressing objects: 100% (19/19), done.
Writing objects: 100% (27/27), done.
Total 27 (delta 0), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 0% (0/0)
To https://github.com/josh902/irene-cleaning.git
 * [new branch]      main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.
```

This means your code is now on GitHub! ✅

---

## 🎉 Next Phase: Vercel Deployment

Once you see the success message above:

1. Open: https://vercel.com/new
2. Click "Import Project"
3. Select GitHub and authenticate
4. Find "irene-cleaning"
5. Click "Import"
6. Click "Deploy"
7. Wait for deployment (2-3 minutes)

You'll get a live URL! 🚀

---

## 📞 Need Help?

- Stuck on a step? Read the error message - they're helpful!
- Copy the exact command, don't type it manually
- Make sure GitHub username and email are correct
- Check GitHub page to verify code was pushed

You've got this! 💪
