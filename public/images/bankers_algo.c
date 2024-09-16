#include <stdio.h>

// Maximum number of processes and resources (you can adjust these values)
#define MAX_PROCESS 10
#define MAX_RESOURCE 5

int process, resource;
int avail[MAX_RESOURCE], max[MAX_PROCESS][MAX_RESOURCE], allot[MAX_PROCESS][MAX_RESOURCE], need[MAX_PROCESS][MAX_RESOURCE], completed[MAX_PROCESS];

// Function to calculate the need matrix
void calculateNeed() {
    for (int i = 0; i < process; i++) {
        for (int j = 0; j < resource; j++) {
            need[i][j] = max[i][j] - allot[i][j];  // Need = Max - Allocation
        }
    }
}

// Function to check if a process can be safely executed
int isSafe() {
    int count = 0;
    int safeSequence[MAX_PROCESS];
    int work[MAX_RESOURCE];  // Work array to hold the available resources

    // Initialize work array with available resources
    for (int i = 0; i < resource; i++) {
        work[i] = avail[i];
    }

    while (count < process) {
        int found = 0;
        for (int i = 0; i < process; i++) {
            if (completed[i] == 0) {  // Check if the process has not been completed
                int canExecute = 1;
                for (int j = 0; j < resource; j++) {
                    if (need[i][j] > work[j]) {
                        canExecute = 0;
                        break;
                    }
                }
                if (canExecute) {  // If the process can be executed safely
                    for (int j = 0; j < resource; j++) {
                        work[j] += allot[i][j];  // Release the resources after execution
                    }
                    safeSequence[count++] = i;  // Add to the safe sequence
                    completed[i] = 1;  // Mark the process as completed
                    found = 1;
                }
            }
        }

        if (!found) {
            printf("\nDeadlock detected! System is not in a safe state.\n");
            return 0;
        }
    }

    // If the system is safe, print the safe sequence
    printf("System is in a safe state.\nSafe sequence: ");
    for (int i = 0; i < process; i++) {
        printf("P[%d] ", safeSequence[i]);
    }
    printf("\n");
    return 1;
}

int main() {
    printf("Enter the number of processes: ");
    scanf("%d", &process);
    
    printf("Enter the number of resources: ");
    scanf("%d", &resource);

    // Input available resources
    printf("Enter the available instances of each resource:\n");
    for (int i = 0; i < resource; i++) {
        scanf("%d", &avail[i]);
    }

    // Input maximum resource needs for each process
    printf("Enter the maximum number of resources that each process may need:\n");
    for (int i = 0; i < process; i++) {
        printf("For P[%d]: ", i);
        for (int j = 0; j < resource; j++) {
            scanf("%d", &max[i][j]);
        }
    }

    // Input allocated resources for each process
    printf("Enter the number of resources allocated to each process:\n");
    for (int i = 0; i < process; i++) {
        printf("For P[%d]: ", i);
        for (int j = 0; j < resource; j++) {
            scanf("%d", &allot[i][j]);
            completed[i] = 0;  // Initialize completed array to 0 (not completed)
        }
    }

    // Calculate the need matrix
    calculateNeed();

    // Check if the system is in a safe state
    isSafe();

    return 0;
}
