  async function loadStudyPlans() {
        try {
            const res = await fetch("http://bscit.sit.kmutt.ac.th/intproj25/cs4/itb-ecors/api/v1/study-plans");

            if (!res.ok) {
                throw new Error("Response status not OK");
            }

            const data = await res.json();
            const tbody = document.querySelector("#plansTable tbody");

            tbody.innerHTML = data.map(p => `
                <tr>
                    <td>${p.id}</td>
                    <td>${p.planCode}</td>
                    <td>${p.nameEng}</td>
                    <td>${p.nameTh}</td>
                </tr>
            `).join("");

        } catch (error) {
            console.error("Error loading study plans:", error);
            showErrorModal();
        }
    }

    function showErrorModal() {
        const modal = document.getElementById("errorModal");
        modal.style.display = "block";

        document.getElementById("refreshBtn").addEventListener("click", () => {
            location.reload();
        });
    }

    loadStudyPlans();