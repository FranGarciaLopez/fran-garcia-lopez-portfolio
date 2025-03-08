export async function fetchGitHubRepoData(repoUrl: string) {
          const repoPath = repoUrl.replace("https://github.com/", "");
          const apiUrl = `https://api.github.com/repos/${repoPath}`;
        
          try {
            const response = await fetch(apiUrl, {
              headers: {
                Accept: "application/vnd.github.v3+json",
              },
            });
        
            if (!response.ok) {
              throw new Error(`GitHub API error: ${response.statusText}`);
            }
        
            const data = await response.json();
            return {
              stars: data.stargazers_count,
              forks: data.forks_count,
              lastUpdated: new Date(data.updated_at).toLocaleDateString(),
              url: repoUrl,
            };
          } catch (error) {
            console.error("Error fetching GitHub repo data:", error);
            return null;
          }
        }
        